const Layout = ({ children, isHovered }) => {
  return (
    <body
      className={` h-screen font-figtree text-black overflow-hidden transiton duration-500 ${
        isHovered ? 'bg-black/90' : 'bg-yellow'
      }`}
    >
      {children}
    </body>
  );
};

export default Layout;
