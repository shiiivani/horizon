import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && (
        <div className="loader-wrapper">
          <div className="row loader-img">
            <div className="col-12">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/crowdpe-6ba17.appspot.com/o/webassets%2Floader-2.gif?alt=media&token=88f706ef-427c-4fc3-ab28-f5fd4dd50e72"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
