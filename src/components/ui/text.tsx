import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva(
    "leading-relaxed font-athiti ", {
    variants: {
        variant: {
            muted: "text-muted",
            error: "text-destructive",
            success: "text-success",
            gradient: "bg-gradient-to-r text-transparent bg-clip-text from-primary to-secondary",
        },
        size: {
            h1: 'text-5xl md:text-6xl font-bold tracking-tight',
            h2: 'text-4xl md:text-5xl font-bold tracking-tight',
            h3: 'text-3xl md:text-4xl font-bold tracking-normal',
            h4: 'text-2xl md:text-3xl font-bold tracking-normal',
            h5: 'text-xl md:text-2xl font-bold tracking-normal',
            h6: 'text-lg md:text-xl font-bold tracking-normal',
            base: 'text-base font-normal tracking-normal',
            sm: 'text-sm font-normal tracking-normal',
            md: 'text-md font-normal tracking-normal',
            lg: 'text-lg font-normal tracking-normal',
            xl: 'text-xl font-normal tracking-normal',
            '2xl': 'text-2xl font-normal tracking-normal',
            xs: 'text-xs font-normal tracking-normal',
        },
        font: {
            caudex: 'font-caudex',
            athiti: 'font-athiti',
        },
        weight: {
            normal: 'font-normal',
            medium: 'font-medium',
            bold: 'font-bold',
        },
        italic: {
            true: 'italic',
        },
        underline: {
            true: 'underline',
        },
    },

    defaultVariants: {
        size: "base",
        weight: "normal",

    }
}
)

export interface TextProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
    as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, size, as, ...props }, ref) => {
        const Comp = as === "span" ? Slot : !as ? "p" : as // if as is not defined, default to <p>

        return (
            <Comp
                className={cn(textVariants({ size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Text.displayName = "Text"

export { Text, textVariants }