import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F6F6F6] flex flex-col items-center justify-center p-8 text-center">
          <div className="max-w-md space-y-4">
            <p className="text-xs font-mono text-[#FF5733] uppercase tracking-widest">Something went wrong</p>
            <h1 className="text-3xl font-extrabold text-[#111111] tracking-tight">Oops — page error</h1>
            <p className="text-sm text-[#666666] leading-relaxed">
              We hit an unexpected error. Please refresh the page or contact us at{' '}
              <a href="mailto:kesign04@gmail.com" className="text-[#111111] underline font-semibold">
                kesign04@gmail.com
              </a>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-3 rounded-full bg-[#111111] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#FF5733] transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
