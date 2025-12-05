import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Pagination from "../components/Pagination";
import { confirmAction, showError, showSuccess } from "../utils/toast";
import { formatDMY } from "../utils/common";
import API_URL, { BANNER_TITLE } from "../utils/config";
import CustomLoading from "../components/CustomLoading";

interface Banner {
  ID: number;
  image: string;
  title: string;
  link: string;
  created_at: string;
}

interface FetchResponse {
  data: {
    responseData: Banner[];
    page: number;
    totalPages: number;
    total: number;
  };
}

const Listing: React.FC = () => {
  const [results, setResults] = useState<Banner[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalEntries, setTotalEntries] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [searchName, setSearchName] = useState<string>("");
  const fetchRecords = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: pageNumber.toString(),
        limit: limit.toString(),
      });

      if (searchName) queryParams.append("name", searchName);

      const res = await fetch(`${API_URL}banners?${queryParams.toString()}`);
      const data: FetchResponse = await res.json();
      console.log("data", data.data)

      setResults(Array.isArray(data.data.responseData) ? data.data.responseData : []);
      setPage(data.data.page || 1);
      setTotalPages(data.data.totalPages || 1);
      setTotalEntries(data.data.total || 0);
    } catch (err) {
      console.error("Error loading users:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords(page);
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
      const res = await fetch(`${API_URL}banners/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete user");

      await showSuccess("User has been deleted successfully.");
      fetchRecords(page);
    } catch (err: any) {
      await showError(err.message || "Failed to delete user.");
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchRecords(1);
  };

  const handleReset = () => {
    setSearchName("");
    setPage(1);
    fetchRecords(1);
  };

  useEffect(() => {
    fetchRecords(1);
  }, [searchName]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold">{BANNER_TITLE}s</h4>
        <div>
          <NavLink to="/banners/create" className="btn btn-primary btn-sm me-2">
            <i className="fa-solid fa-plus"></i> Add New {BANNER_TITLE}
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
          <div style={{ display: 'flex', justifyContent: 'center' }}><CustomLoading /> </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Link</th>
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
                    <tr key={result.ID}>
                      <td>{result.ID}</td>
                      <td>
                        <img src={result.image} alt="Banner" />
                      </td>
                      <td>{result.title}</td>
                      <td>{result.link}</td>
                      <td>{formatDMY(result.created_at)}</td>
                      <td className="text-right">
                        <Link
                          to={`/banners/edit/${result.ID}`}
                          className="text-warning me-3"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-link text-danger p-0"
                          onClick={() => handleDelete(result.ID)}
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
