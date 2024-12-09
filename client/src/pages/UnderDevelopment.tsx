import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const UnderDevelopment: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">Under Development</h1>
        <p className="text-xl mb-6 text-muted-foreground">
          This page is currently under development. Stay tuned for updates!
        </p>
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

export default UnderDevelopment;
