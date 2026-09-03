const partners = ['CISCO', 'HIKVISION', 'DAHUA', 'FORTINET', 'HPE ARUBA', 'SOPHOS', 'SCHNEIDER', 'PALO ALTO'];

const TechPartners = () => {
  return (
    <section className="section-padding-sm bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800" id="partners">
      <div className="container-custom text-center">
        <p className="section-tag mb-3">OEM TECHNOLOGY PARTNERS</p>
        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8">
          {partners.map((name, i) => (
            <span key={i} className="font-black text-xs sm:text-sm tracking-wider text-slate-700 dark:text-slate-300">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPartners;
