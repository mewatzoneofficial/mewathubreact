import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Pagination from "../components/Pagination";
import { confirmAction, showError, showSuccess } from "../utils/toast";
import { formatDMY } from "../utils/common";
import API_URL, { USER_TITLE } from "../utils/config";
import CustomLoading from "../components/CustomLoading";

interface Blog {
  blogid: number;
  title: string;
  author: string;
  likes: string;
  created_at: string;
}

interface FetchResponse {
  data: {
    responseData: Blog[];
    page: number;
    totalPages: number;
    total: number;
  };
}

const Listing: React.FC = () => {
  const [results, setResults] = useState<Blog[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalEntries, setTotalEntries] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [searchName, setSearchName] = useState<string>("");
  const [searchEmail, setSearchEmail] = useState<string>("");
  const [searchMobile, setSearchMobile] = useState<string>("");

  const fetchresults = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: pageNumber.toString(),
        limit: limit.toString(),
      });

      if (searchName) queryParams.append("name", searchName);
      if (searchEmail) queryParams.append("email", searchEmail);
      if (searchMobile) queryParams.append("mobile", searchMobile);

      const res = await fetch(`${API_URL}blogs?${queryParams.toString()}`);
      const data: FetchResponse = await res.json();
      console.log("data", data.data)

      setResults(Array.isArray(data.data.responseData) ? data.data.responseData : []);
      setPage(data.data.page || 1);
      setTotalPages(data.data.totalPages || 1);
      setTotalEntries(data.data.total || 0);
    } catch (err) {
      console.error("Error loading blogs:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchresults(page);
  }, [page, limit]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleDelete = async (id: number) => {
    const isConfirmed = await confirmAction({
      text: "You want to delete this?",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });
    if (!isConfirmed) return;

    try {
      const res = await fetch(`${API_URL}blogs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete user");

      await showSuccess("User has been deleted successfully.");
      fetchresults(page);
    } catch (err: any) {
      await showError(err.message || "Failed to delete user.");
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchresults(1);
  };

  const handleReset = () => {
    setSearchName("");
    setSearchEmail("");
    setSearchMobile("");
    setPage(1);
    fetchresults(1);
  };

  useEffect(() => {
    fetchresults(1);
  }, [searchName, searchEmail, searchMobile]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold">{USER_TITLE}s</h4>
        <div>
          <NavLink to="/blogs/create" className="btn btn-primary btn-sm me-2">
            <i className="fa-solid fa-plus"></i> Add New {USER_TITLE}
          </NavLink>
        </div>
      </div>

      <div className="card p-3">
        <div className="searchInput">
          <div className="row m-3">
            <div className="col-md-4">
              <label className="form-label fw-medium">Name</label>
              <input
                type="text"
                name="name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="form-control"
                placeholder="Search Name"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-medium">Email</label>
              <input
                type="text"
                name="email"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
                className="form-control"
                placeholder="Search Email"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-medium">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={searchMobile}
                onChange={(e) => setSearchMobile(e.target.value)}
                className="form-control"
                placeholder="Search Mobile"
              />
            </div>
          </div>
          <div className="row m-3">
            <div className="col-md-4 d-flex align-items-end gap-2">
              <button
                onClick={handleSearch}
                className="btn btn-primary w-40"
                disabled={loading}
              >
                Search
              </button>
              <button
                onClick={handleReset}
                className="btn btn-secondary w-40"
                disabled={loading}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-3">
        {loading ? (
          <div><CustomLoading /> </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Likes</th>
                  <th>Create Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      Record Not Found.
                    </td>
                  </tr>
                ) : (
                  results.map((result) => (
                    <tr key={result.blogid}>
                      <td>{result.blogid}</td>
                      <td>{result.title}</td>
                      <td>{result.author}</td>
                      <td>{result.likes}</td>
                      <td>{formatDMY(result.created_at)}</td>
                      <td className="text-right">
                        <Link
                          to={`/blogs/edit/${result.blogid}`}
                          className="text-warning me-3"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-link text-danger p-0"
                          onClick={() => handleDelete(result.blogid)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mt-2">
          <small>
            Showing {(page - 1) * limit + 1} to {Math.min(page * limit, totalEntries)} of{" "}
            {totalEntries} entries
          </small>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Listing;
