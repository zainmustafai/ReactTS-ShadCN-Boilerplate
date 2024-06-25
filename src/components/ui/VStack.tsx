import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const vStackVariants = cva("flex", {
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
        justify: "center",
        direction: "column",
    },
});

export interface VStackProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof vStackVariants> {
}


const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
    ({ className, align, justify, direction, ...props }, ref) => {
        return (
            <div
                className={cn(vStackVariants({ align, justify, direction, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

VStack.displayName = "VStack"