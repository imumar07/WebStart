import WordPullUp from "../magicui/word-pull-up";
import HyperText from "../magicui/hyper-text";


const stats = [
  { id: 1, name: 'Projects', value: '10' },
  { id: 2, name: 'Clients', value: '3' },
  { id: 3, name: 'Books Chapters', value: '82' },
]

export default function Stat() {
  return (
    <div className="bg-[#D4D5D7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-5">
        <WordPullUp words="Projects & Clients" className="text-2xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-4xl md:leading-[5rem]" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
              <h1 className="text-base leading-7 text-black">{stat.name}</h1>
              <div className="order-first text-3xl font-semibold tracking-tight text-black sm:text-5xl">
                <HyperText text={stat.value} animateOnLoad={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
