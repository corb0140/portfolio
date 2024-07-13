const SectionTitle = ({ number, title }) => {
  return (
    <h2 className={`flex items-center py-5 gap-2`}>
      <span className="text-secondary">{number}.</span>
      <p className="text-xl md:text-2xl text-Roboto font-bold">{title}</p>
      <div className="border-b border-white border-opacity-20 w-1/2 h-1"></div>
    </h2>
  );
};

export default SectionTitle;
