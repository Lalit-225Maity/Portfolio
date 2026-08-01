function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

    </div>
  );
}

export default BackgroundAnimation;