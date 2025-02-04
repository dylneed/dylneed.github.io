import './Header.css';

function Header({post}) {
  return (
    <div className="blog-header">
      <h2 className="title">{post.title}</h2>
      <h3 className="subtitle">{post.subtitle}</h3>
      <p className="by-line">
        <span className="author">{post.author && `by ${post.author},`}</span>
        <span className="date"> {post.date && post.date.toLocaleDateString()}</span>
        <span className="edited-date">{post.editedDate && ` (edited ${post.editedDate.toLocaleDateString()})`}</span>
      </p>
    </div>
  );
}

export default Header;