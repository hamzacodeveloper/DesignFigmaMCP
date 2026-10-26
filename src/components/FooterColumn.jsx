export default function FooterColumn({
  title,
  links,
  className = "footer-column",
  heading = "h2",
}) {
  const Heading = heading;

  return (
    <nav className={className} aria-label={title}>
      <Heading>{title}</Heading>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
