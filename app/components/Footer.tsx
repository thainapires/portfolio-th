import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full rounded-lg shadow mt-4 bottom-0 absolute">
        <div className="w-full max-w-screen-xl mx-auto ">
            <hr className="mx-6 mb-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <span className="mb-6 block text-sm text-gray-500 sm:text-center dark:text-white-400">© {(new Date().getFullYear())}<Link href="#" className="hover:underline"> Thainá Pires</Link>. Todos os direitos reservados.</span>
        </div>
    </footer>
  )
}