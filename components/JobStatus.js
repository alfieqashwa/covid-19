export default function JobStatus() {
  return (
    <>
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        {/* <div className="w-auto h-auto"> */}
        <iframe
          style={{ width: "100%", height: 1000, border: 0 }}
          src="https://datastudio.google.com/embed/reporting/36d5ba76-940d-4e89-8b5a-cdc21526d23b/page/TgrZB"
          frameborder="0"
          // style="border:0"
          allowfullscreen
        ></iframe>
      </div>
      <hr className="border-b-2 border-gray-600 my-8 mx-4" />
    </>
  );
}
