import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { confirmAction, showError, showSuccess } from "../utils/toast";
import API_URL, { SETTING_TITLE } from "../utils/config";

interface Setting {
  id: number;
  title: string;
  created_at: string;
}

interface FetchResponse {
  data: {
    responseData: Setting[];
    page: number;
    totalPages: number;
    total: number;
  };
}

const Listing: React.FC = () => {
  const [results, setResults] = useState<Setting[]>([]);
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

      const res = await fetch(`${API_URL}news?${queryParams.toString()}`);
      const data: FetchResponse = await res.json();
      console.log("data", data.data)

      setResults(Array.isArray(data.data.responseData) ? data.data.responseData : []);
      setPage(data.data.page || 1);
      setTotalPages(data.data.totalPages || 1);
      setTotalEntries(data.data.total || 0);
    } catch (err) {
      console.error("Error loading news:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchresults(page);
  }, [page, limit]);

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
                disabled={loading} >
                Search
              </button>
              <button onClick={handleReset}
                className="btn btn-secondary w-40"
                disabled={loading} >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
