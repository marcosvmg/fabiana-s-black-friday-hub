const ScheduleAlertBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <p className="text-sm sm:text-base font-bold text-primary-foreground uppercase tracking-wide text-center">
          NOVEMBRO E DEZEMBRO ESGOTADOS. AGENDA DISPONÍVEL A PARTIR DE JANEIRO.
        </p>
      </div>
    </div>
  );
};

export default ScheduleAlertBar;
