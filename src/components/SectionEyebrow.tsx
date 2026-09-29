interface SectionEyebrowProps {
  children: React.ReactNode;
}

const SectionEyebrow = ({ children }: SectionEyebrowProps) => (
  <p className="section-eyebrow">{children}</p>
);

export default SectionEyebrow;
