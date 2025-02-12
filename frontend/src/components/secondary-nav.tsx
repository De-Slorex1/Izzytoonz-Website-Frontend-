import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SecondaryNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center justify-between p-4", className)}
      {...props}
    >
      <div className="flex items-center space-x-4">
        <Input
          type="search"
          placeholder="Search..."
          className="w-[150px] md:w-[200px] lg:w-[300px]"
        />
      </div>
      <Button size="sm" className="hidden sm:inline-flex">New Project</Button>
    </nav>
  )
}

