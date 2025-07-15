const NoticeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 shadow-md dark:bg-gray-200" style={{ overflow: "hidden",   padding: "8px 0" }}>
      <p style={{
        display: "inline-block",
        whiteSpace: "nowrap",
        paddingLeft: "100%",
        animation: "scroll-left 25s linear infinite",
        fontWeight: "bold",
        color: "#1E3A8A"
      }}>
        Warning: All the information shown here is taken from Facebook, and the information is extracted using AI. If you find any errors, please email me textmemj@gmail.com. Thanks 
      </p>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default NoticeBanner;
