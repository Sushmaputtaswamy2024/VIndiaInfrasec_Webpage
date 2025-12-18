export default function FooterWrapper({ children }) {
  return (
    <div
      style={{
        position: "relative",
        background: "#f2f2f2",
        zIndex: 1000,
        isolation: "isolate",
        transform: "none",
      }}
    >
      {children}
    </div>
  );
}
