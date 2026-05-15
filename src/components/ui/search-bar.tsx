"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full md:w-80">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-surface-container-highest px-4 py-3 rounded-none border-0 focus:ring-0 focus:border-b-2 focus:border-primary transition-all font-body text-sm placeholder:text-outline"
      />
      <span
        className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant"
        data-icon="search"
      >
        search
      </span>
    </div>
  );
}
