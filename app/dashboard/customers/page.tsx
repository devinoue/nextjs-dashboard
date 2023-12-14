export default function Page() {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  // Your code here!
  const list = [];

  const domains = [];
  for (const domain of list) {
    if (domain.availability_id === null) {
      console.log(domain.domain_name);
      domains.push(domain.domain_name);
    }
  }

  return <p>Customers Page {domains.join(" ")}</p>;
}
