import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLProps } from "react";

const logoVariants = cva(
  'shrink-0 w-fit',
  {
    variants: {
      variant: {
        default: "text-gray-800",
        ghost: "text-gray-400",
        brand: "text-amber-700",
        white: "text-white",
      },
      size: {
        default: "h-9",
        sm: "h-6",
        lg: "h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: HTMLProps<HTMLElement>["className"];
}

export function Logo({ variant, size, className }: LogoProps) {
  return (
    <svg
      className={cn(
        logoVariants({ variant, size }),
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 226 40"
    >
      <g>
         {/* Symbol */}
        <path fill="currentColor" d="M39.428 0c-.81 2.305-1.945 4.438-2.922 6.645-.917 2.073-1.645 4.281-2.408 6.438-.654 1.85-1.429 3.82-1.678 5.814-.582-1.637-.343-3.471-.204-5.191.116-1.45.11-2.912.255-4.361.093-.937.612-3.07-.005-3.82-.384-.467-1.143-.365-1.535.028-.728.73-1.043 2.377-1.444 3.376-1.304 3.251-2.628 6.452-4.18 9.553-.973 1.945-2.233 3.774-3.047 5.814-1.173-1.597-2.184-3.335-2.672-5.399-1.337-5.643 1.145-11.839 5.65-14.264 1.66-.893 3.284-1.103 5.08-1.103l.175-1.453c-1.455-.51-3.313.007-4.73.554-5.616 2.172-8.733 9.092-7.662 15.85.295 1.858.971 3.65 1.89 5.192.445.75 1.338 1.502.893 2.492-.734 1.632-2.09 3.07-3.179 4.361-2.964 3.515-6.3 6.787-10.51 7.848-.883.222-1.9.47-2.804.415-1.402-.085-2.475-.466-3.854.044.395.67 1.09.802 1.752.942 1.517.318 3.215.291 4.73-.032 4.907-1.046 9.318-5.058 12.512-9.425.865-1.181 1.994-2.312 2.554-3.737 1.464.658 2.642 1.835 4.204 2.306 3.994 1.204 8.224.119 11.212-3.348.793-.92 1.53-1.869 1.927-3.112-.429 0-.947-.078-1.351.126-.621.313-1.005 1.178-1.468 1.725a10.85 10.85 0 01-2.612 2.225c-2.375 1.429-5.184 1.709-7.708.684-1.137-.461-2.08-1.25-3.153-1.852 1.755-2.906 3.465-5.838 4.98-8.93.654-1.336 1.482-2.663 1.852-4.153.614 2.464.055 5.324.492 7.891.29 1.7.918 2.964 2.486 2.284-.542-1.776.185-3.492.71-5.191.815-2.634 1.827-5.204 2.93-7.684.585-1.313 1.36-2.55 1.79-3.945.01 1-.31 1.933-.488 2.907-.512 2.79-1 5.656-.605 8.514.15 1.095.35 2.233.987 3.093.922 1.243 2.434 1.283 3.328 0 1.048-1.502 1.528-3.561 2.034-5.377.29-1.044.602-2.03.35-3.115h-.35c-.453 1.895-.879 3.8-1.552 5.607-.374 1.002-.694 1.899-1.601 2.284-.421-1.75-.792-3.336-.685-5.191.198-3.428 1.644-6.601 1.878-9.968.12-1.732-.728-3.995-2.244-4.361z" />
        {/* Separator */}
        <path fill="currentColor" opacity="0.5" d="M52.075 2H53.075V38H52.075z" />
        {/* Núcleo */}
        <path fill="currentColor" opacity="0.75" d="M64.211 14.5V3.3h1.696l5.616 8.432V3.3h1.696v11.2h-1.696l-5.616-8.432V14.5h-1.696zm14.145.192c-.96 0-1.717-.299-2.272-.896-.544-.597-.816-1.488-.816-2.672v-4.56h1.696v4.384c0 1.536.63 2.304 1.888 2.304.63 0 1.147-.224 1.552-.672.406-.448.608-1.088.608-1.92V6.564h1.696V14.5h-1.504l-.128-1.392c-.245.49-.608.88-1.088 1.168-.47.277-1.013.416-1.632.416zm-.16-8.784V4.692l3.488-1.984v1.408l-3.488 1.792zm10.43 8.784c-.779 0-1.478-.176-2.096-.528a3.852 3.852 0 01-1.44-1.456c-.342-.63-.512-1.355-.512-2.176 0-.821.17-1.541.512-2.16A3.82 3.82 0 0186.53 6.9c.618-.352 1.317-.528 2.096-.528.981 0 1.802.256 2.464.768.672.512 1.104 1.205 1.296 2.08H90.61a1.67 1.67 0 00-.704-1.024c-.363-.245-.79-.368-1.28-.368-.416 0-.8.107-1.152.32-.352.203-.635.507-.848.912-.214.395-.32.885-.32 1.472s.106 1.083.32 1.488c.213.395.496.699.848.912.352.213.736.32 1.152.32.49 0 .917-.123 1.28-.368.362-.245.597-.592.704-1.04h1.776a3.436 3.436 0 01-1.28 2.064c-.672.523-1.499.784-2.48.784zm5.6-.192V2.98h1.695V14.5h-1.696zm7.555.192c-.779 0-1.472-.17-2.08-.512a3.771 3.771 0 01-1.408-1.456c-.342-.619-.512-1.339-.512-2.16 0-.832.165-1.563.496-2.192.341-.63.81-1.12 1.408-1.472.608-.352 1.312-.528 2.112-.528.778 0 1.456.176 2.032.528.576.341 1.024.8 1.344 1.376.32.576.48 1.21.48 1.904 0 .107-.006.224-.016.352 0 .117-.006.25-.016.4h-6.176c.053.768.304 1.355.752 1.76.458.395.986.592 1.584.592.48 0 .88-.107 1.2-.32.33-.224.576-.523.736-.896h1.696c-.214.747-.64 1.37-1.28 1.872-.63.501-1.414.752-2.352.752zm0-6.928c-.566 0-1.067.17-1.504.512-.438.33-.704.832-.8 1.504h4.48c-.032-.619-.251-1.11-.656-1.472-.406-.363-.912-.544-1.52-.544zm9.344 6.928c-.758 0-1.44-.17-2.048-.512a3.883 3.883 0 01-1.424-1.456c-.352-.63-.528-1.36-.528-2.192 0-.832.176-1.557.528-2.176a3.813 3.813 0 011.456-1.456 3.98 3.98 0 012.032-.528c.757 0 1.434.176 2.032.528a3.707 3.707 0 011.44 1.456c.362.619.544 1.344.544 2.176 0 .832-.182 1.563-.544 2.192a3.852 3.852 0 01-1.44 1.456c-.608.341-1.291.512-2.048.512zm0-1.456c.405 0 .778-.101 1.12-.304.352-.203.634-.501.848-.896.213-.405.32-.907.32-1.504s-.107-1.093-.32-1.488a2.104 2.104 0 00-.832-.912 2.156 2.156 0 00-1.12-.304c-.406 0-.784.101-1.136.304-.342.203-.619.507-.832.912-.214.395-.32.89-.32 1.488 0 .597.106 1.099.32 1.504.213.395.49.693.832.896.341.203.714.304 1.12.304z"  />
        {/* Core */}
        <path fill="currentColor" d="M64.435 36.5v-14h4.78c1.64 0 2.987.293 4.04.88 1.067.573 1.853 1.387 2.36 2.44.52 1.04.78 2.267.78 3.68 0 1.413-.26 2.647-.78 3.7-.507 1.04-1.293 1.853-2.36 2.44-1.053.573-2.4.86-4.04.86h-4.78zm2.56-2.2h2.1c1.173 0 2.1-.187 2.78-.56a3.298 3.298 0 001.46-1.64c.293-.72.44-1.587.44-2.6 0-1-.147-1.86-.44-2.58a3.287 3.287 0 00-1.46-1.66c-.68-.387-1.607-.58-2.78-.58h-2.1v9.62zm11.599 2.2v-9.92h2.28l.24 1.86c.36-.64.846-1.147 1.46-1.52.626-.387 1.36-.58 2.2-.58v2.7h-.72c-.56 0-1.06.087-1.5.26-.44.173-.787.473-1.04.9-.24.427-.36 1.02-.36 1.78v4.52h-2.56zm8.229.14c-.467 0-.854-.147-1.16-.44a1.445 1.445 0 01-.44-1.06c0-.427.146-.787.44-1.08.306-.293.693-.44 1.16-.44.466 0 .846.147 1.14.44.306.293.46.653.46 1.08 0 .413-.154.767-.46 1.06-.294.293-.674.44-1.14.44zm14.87.1c-1.413 0-2.627-.3-3.64-.9a6.153 6.153 0 01-2.34-2.54c-.547-1.093-.82-2.353-.82-3.78 0-1.427.273-2.687.82-3.78.547-1.093 1.327-1.947 2.34-2.56s2.227-.92 3.64-.92c1.68 0 3.053.42 4.12 1.26 1.08.827 1.753 1.993 2.02 3.5h-2.82c-.173-.76-.547-1.353-1.12-1.78-.56-.44-1.307-.66-2.24-.66-1.293 0-2.307.44-3.04 1.32-.733.88-1.1 2.087-1.1 3.62s.367 2.74 1.1 3.62c.733.867 1.747 1.3 3.04 1.3.933 0 1.68-.2 2.24-.6.573-.413.947-.98 1.12-1.7h2.82c-.267 1.44-.94 2.567-2.02 3.38-1.067.813-2.44 1.22-4.12 1.22zm8.346-.24V22.1h2.56v14.4h-2.56zm8.596.24c-.854 0-1.554-.133-2.1-.4-.547-.28-.954-.647-1.22-1.1a2.9 2.9 0 01-.4-1.5c0-.92.36-1.667 1.08-2.24.72-.573 1.8-.86 3.24-.86h2.52v-.24c0-.68-.194-1.18-.58-1.5-.387-.32-.867-.48-1.44-.48-.52 0-.974.127-1.36.38-.387.24-.627.6-.72 1.08h-2.5c.066-.72.306-1.347.72-1.88.426-.533.973-.94 1.64-1.22.666-.293 1.413-.44 2.24-.44 1.413 0 2.526.353 3.34 1.06.813.707 1.22 1.707 1.22 3v6.1h-2.18l-.24-1.6a3.677 3.677 0 01-1.24 1.32c-.52.347-1.194.52-2.02.52zm.58-2c.733 0 1.3-.24 1.7-.72.413-.48.673-1.073.78-1.78h-2.18c-.68 0-1.167.127-1.46.38-.294.24-.44.54-.44.9 0 .387.146.687.44.9.293.213.68.32 1.16.32zm11.263 2c-1.24 0-2.2-.387-2.88-1.16-.667-.773-1-1.907-1-3.4v-5.6h2.54v5.36c0 .853.173 1.507.52 1.96.346.453.893.68 1.64.68.706 0 1.286-.253 1.74-.76.466-.507.7-1.213.7-2.12v-5.12h2.56v9.92h-2.26l-.2-1.68a3.475 3.475 0 01-1.34 1.4c-.574.347-1.247.52-2.02.52zm13.008 0c-.934 0-1.767-.227-2.5-.68a4.861 4.861 0 01-1.74-1.86c-.427-.787-.64-1.68-.64-2.68 0-1 .213-1.887.64-2.66a4.713 4.713 0 011.74-1.84c.733-.453 1.566-.68 2.5-.68.746 0 1.4.14 1.96.42.56.28 1.013.673 1.36 1.18V22.1h2.56v14.4h-2.28l-.28-1.42c-.32.44-.747.827-1.28 1.16-.52.333-1.2.5-2.04.5zm.54-2.24c.826 0 1.5-.273 2.02-.82.533-.56.8-1.273.8-2.14 0-.867-.267-1.573-.8-2.12-.52-.56-1.194-.84-2.02-.84-.814 0-1.487.273-2.02.82-.534.547-.8 1.253-.8 2.12 0 .867.266 1.58.8 2.14.533.56 1.206.84 2.02.84zm9.327-9.46c-.467 0-.854-.14-1.16-.42a1.4 1.4 0 01-.44-1.06c0-.427.146-.773.44-1.04.306-.28.693-.42 1.16-.42.466 0 .846.14 1.14.42.306.267.46.613.46 1.04 0 .427-.154.78-.46 1.06-.294.28-.674.42-1.14.42zm-1.28 11.46v-9.92h2.56v9.92h-2.56zm9.992.24c-.96 0-1.827-.22-2.6-.66a4.962 4.962 0 01-1.82-1.82c-.44-.787-.66-1.693-.66-2.72 0-1.027.226-1.927.68-2.7a4.918 4.918 0 011.82-1.84c.773-.44 1.64-.66 2.6-.66.946 0 1.8.22 2.56.66a4.736 4.736 0 011.82 1.84c.453.773.68 1.673.68 2.7 0 1.027-.227 1.933-.68 2.72a4.775 4.775 0 01-1.82 1.82c-.774.44-1.634.66-2.58.66zm0-2.22c.666 0 1.246-.247 1.74-.74.493-.507.74-1.253.74-2.24 0-.987-.247-1.727-.74-2.22-.494-.507-1.067-.76-1.72-.76-.68 0-1.267.253-1.76.76-.48.493-.72 1.233-.72 2.22 0 .987.24 1.733.72 2.24.493.493 1.073.74 1.74.74zm12.194 1.98v-14h3.04l4.46 8.88 4.4-8.88h3.04v14h-2.56v-9.66l-3.9 7.66h-2.02l-3.9-7.66v9.66h-2.56zm21.316.24c-1.24 0-2.2-.387-2.88-1.16-.666-.773-1-1.907-1-3.4v-5.6h2.54v5.36c0 .853.174 1.507.52 1.96.347.453.894.68 1.64.68.707 0 1.287-.253 1.74-.76.467-.507.7-1.213.7-2.12v-5.12h2.56v9.92h-2.26l-.2-1.68a3.462 3.462 0 01-1.34 1.4c-.573.347-1.246.52-2.02.52zm12.868-.24c-1.04 0-1.873-.253-2.5-.76-.626-.507-.94-1.407-.94-2.7v-4.32h-1.7v-2.14h1.7l.3-2.66h2.26v2.66h2.68v2.14h-2.68v4.34c0 .48.1.813.3 1 .214.173.574.26 1.08.26h1.24v2.18h-1.74zm8.418 0c-1.04 0-1.873-.253-2.5-.76-.626-.507-.94-1.407-.94-2.7v-4.32h-1.7v-2.14h1.7l.3-2.66h2.26v2.66h2.68v2.14h-2.68v4.34c0 .48.1.813.3 1 .214.173.574.26 1.08.26h1.24v2.18h-1.74zm5.378-11.46c-.466 0-.853-.14-1.16-.42a1.404 1.404 0 01-.44-1.06c0-.427.147-.773.44-1.04.307-.28.694-.42 1.16-.42.467 0 .847.14 1.14.42.307.267.46.613.46 1.04 0 .427-.153.78-.46 1.06-.293.28-.673.42-1.14.42zm-1.28 11.46v-9.92h2.56v9.92h-2.56z" />
      </g>
    </svg>
  )
}