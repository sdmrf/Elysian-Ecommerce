import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/common/modeToggle"

const About = () => {
  return (
    <div className="h-full flex justify-center items-center flex-col border-4">
      <h1>About</h1>
      <ModeToggle />
      <Button variant='cartoon' >Click me</Button>
    </div>
  )
}

export default About