import dynamic from "next/dynamic";

const ScrollSequence = dynamic(
  () =>
    import("../../components/image-sequence").then((mod) => mod.ScrollSequence),
  { ssr: false },
);

export default function ScrollDriven() {
  return <ScrollSequence />;
}
