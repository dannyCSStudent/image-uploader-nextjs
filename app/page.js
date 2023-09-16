import { Navbar,  ImageUploader, Footer} from "../components"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-auto justify-between">
          <ImageUploader />
        </div>
        <div className="flex flex-col inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>

    </div>
  )
}
