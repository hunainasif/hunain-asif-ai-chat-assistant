import { columns, File } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<File[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      fileName: "Hey",
      uploadDate: "17 Sep",
    },
    {
      id: "728ed52f",
      fileName: "Hey",
      uploadDate: "17 Sep",
    },
    {
      id: "728ed52f",
      fileName: "Hey",
      uploadDate: "17 Sep",
    },
    {
      id: "728ed52f",
      fileName: "Hey",
      uploadDate: "17 Sep",
    },
    {
      id: "728ed52f",
      fileName: "Hey",
      uploadDate: "17 Sep",
    },
    // ...
  ];
}

export default async function FileTable() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
