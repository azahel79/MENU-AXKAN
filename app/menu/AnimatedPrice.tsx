"use client";

import NumberFlow from "@number-flow/react";

export default function AnimatedPrice({ price }: { price: string }) {
  const amount = Number(price.replace(/[^0-9.-]/g, ""));
  if (!Number.isFinite(amount)) return <>{price}</>;

  const prefix = price.trim().startsWith("+") ? "+$" : "$";
  return <NumberFlow value={amount} prefix={prefix} locales="es-MX" willChange />;
}