function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="w-32 h-32 relative">
        <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-secondary rounded-full animate-spin-reverse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
          </svg>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold text-primary">Cargando...</p>
      <p className="text-sm text-gray-600">Preparando un hogar lleno de amor</p>
    </div>
  );
}

export default LoadingScreen;
