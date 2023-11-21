import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./document";

function App() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <PDFViewer width={"100%"} height={"100%"}>
        <MyDocument />
      </PDFViewer>
    </main>
  );
}

export default App;
