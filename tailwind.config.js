/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--dark-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        // "gradient": "linear-gradient(264.56deg, #38AEFF 22.41%, #FA23F5 99.18%)",
        gradient: "linear-gradient(264.56deg, #38AEFF 22.41%, #FA23F5 99.18%)",
        "gradient-hover":
          "linear-gradient(-264.56deg, #38AEFF 22.41%, #FA23F5 99.18%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      padding: {
				xs: "4px",
				sm: "8px",
				md: "16px",
				lg: "24px",
				xl: "32px",
				"2xl": "calc(var(--space) * 4)",
				"3xl": "calc(var(--space) * 5)",
				"4xl": "calc(var(--space) * 6)",
				"5xl": "calc(var(--space) * 7)",
				"6xl": "calc(var(--space) * 8)",
				"7xl": "calc(var(--space) * 9)",
				"8xl": "calc(var(--space) * 10)",
			},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        typing: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.5)' },
				},
      },
      fontFamily: {
				caudex: ["Caudex", "serif"],
				athiti: ["Athiti", "sans-serif"],
			},
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
				typing: 'typing 1s infinite ease-in-out',

      },
    },
  },
  plugins: [require("tailwindcss-animate"),
      require('@tailwindcss/typography'),
  ],
}