import Image from "next/image"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="flex justify-between items-center mb-4">
      <a href="/">
        <Image src="/assets/logo.png" alt="לוגו מופי" id="logo" height={150} width={150} />
      </a>

      <div className="links flex gap-x-4 text-lg">
        <a href="/" className="link">פנו אלינו</a>
        <a href="/" className="link">משחקים ברשת</a>
        <a href="/" className="link">סרטונים</a>
      </div>
    </header>
  )
}

export default Navbar