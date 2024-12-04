import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl mb-6 text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
        <Button
          variant="outline"
          onClick={goHome}
          className="w-full max-w-xs mx-auto"
        >
          Go back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;