import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const hstackVariants = cva("flex", {
    variants: {
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
        },
        direction: {
            row: "flex-row",
            column: "flex-col",
        },
    },
    defaultVariants: {
        align: "center",
        justify: "around",
        direction: "row",
    },
});

export interface HStackProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof hstackVariants> {
}

const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
    ({ className, align, justify, direction, ...props }, ref) => {
        return (
            <div
                className={cn(hstackVariants({ align, justify, direction, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

HStack.displayName = "HStack"

export { HStack, hstackVariants }