export default function Footer() {
  return (
    <footer style={{ padding: 24, borderTop: '1px solid #eee', marginTop: 48 }}>
      <div style={{ maxWidth: 960, margin: '0 auto', fontSize: 12, color: '#666' }}>
        © {new Date().getFullYear()} SeekerLane
      </div>
    </footer>
  );
}
