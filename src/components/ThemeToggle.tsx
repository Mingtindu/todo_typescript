import { Moon, Sun } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 rotate-0 hover:rotate-12" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300 rotate-0 hover:rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}