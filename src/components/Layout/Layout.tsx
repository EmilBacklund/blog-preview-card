const Layout = ({ children, isHovered }) => {
  return (
    <div className={` h-screen font-figtree text-black `}>
      <div
        className={`h-full overflow-hidden transiton duration-500 ${
          isHovered ? 'bg-black/90' : 'bg-yellow'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
