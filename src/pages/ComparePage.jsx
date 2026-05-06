import { Link } from 'react-router-dom'
import './ComparePage.css'; 
function ComparePage() {

    return (
        <div className="compare-empty">
            <h2>No products selected for comparison</h2>
            <p>Go to the home page and click "Compare" on up to 4 products.</p>
            <Link to="/" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '4px' }}>
                Browse Products
            </Link>
        </div>
    );
}

export default ComparePage;