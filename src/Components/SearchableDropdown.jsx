import { useState, useMemo, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchableDropdown({
  placeholder,
  data,
  keyName,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);

  // Outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter Data
  const filteredData = useMemo(() => {
    if (!search) return data;

    return data.filter((item) =>
      item[keyName]
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, data, keyName]);

  const handleSelect = (value) => {
    setSearch(value);
    setOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
    >
      {/* Input */}

      <div
        onClick={() => setOpen(true)}
        className="w-full h-14 border border-gray-300 rounded-lg px-4 flex items-center bg-white cursor-pointer"
      >
        <input
          type="text"
          value={search}
          placeholder={placeholder}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpen(true);
          }}
          className="w-full outline-none text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/* Dropdown */}

      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-xl border border-gray-200 shadow-xl z-50 overflow-hidden">

          {/* Search */}

          <div className="p-3 border-b">
            <div className="flex items-center border rounded-lg px-3 h-11">
              <IoSearchOutline className="text-gray-400 mr-2" />

              <input
                autoFocus
                type="text"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* List */}

          <div className="max-h-72 overflow-y-auto">

            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    handleSelect(item[keyName])
                  }
                  className="px-5 py-3 cursor-pointer hover:bg-gray-100 transition"
                >
                  {item[keyName]}
                </div>
              ))
            ) : (
              <div className="px-5 py-4 text-gray-400">
                No Result Found
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default SearchableDropdown;