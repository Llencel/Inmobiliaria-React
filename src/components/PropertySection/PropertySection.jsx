const PropertySection = ({ title, children }) => {
  return (
    <section className="property-section">
      <h2 className="property-section-title">{title}</h2>
      {children}
    </section>
  );
};

export default PropertySection;
