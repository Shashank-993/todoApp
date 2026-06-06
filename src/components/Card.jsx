export default function Card() {
  return (
    <div className="group w-1/2 h-64 mx-auto perspective-1000px cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
        {/* Front Side */}
        <div className="text-3xl text-black absolute w-full h-full backface-hidden flex items-center justify-center rounded-md bg-white border border-gray-200">
          06/06/2026
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden p-4 flex items-start justify-start rounded-md bg-red-500 text-white transform-[rotateY(180deg)]">
          <ol className="custom-scroll-container h-full w-full list-inside list-decimal text-xl overflow-y-auto text-left">
            <li className="z-10">Have sex</li>
            <li className="z-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quidem! Ut quis saepe velit numquam accusantium. Consequuntur hic, nam debitis, iusto exercitationem cumque necessitatibus aliquam omnis ipsum aperiam quibusdam dolores eum cupiditate fugiat possimus architecto distinctio amet molestias error, voluptas corporis ea eaque laboriosam magni? Perferendis ea et dignissimos. At.</li>
            <li className="z-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quidem! Ut quis saepe velit numquam accusantium. Consequuntur hic, nam debitis, iusto exercitationem cumque necessitatibus aliquam omnis ipsum aperiam quibusdam dolores eum cupiditate fugiat possimus architecto distinctio amet molestias error, voluptas corporis ea eaque laboriosam magni? Perferendis ea et dignissimos. At.</li>
            <li className="z-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quidem! Ut quis saepe velit numquam accusantium. Consequuntur hic, nam debitis, iusto exercitationem cumque necessitatibus aliquam omnis ipsum aperiam quibusdam dolores eum cupiditate fugiat possimus architecto distinctio amet molestias error, voluptas corporis ea eaque laboriosam magni? Perferendis ea et dignissimos. At.</li>
            <li className="z-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quidem! Ut quis saepe velit numquam accusantium. Consequuntur hic, nam debitis, iusto exercitationem cumque necessitatibus aliquam omnis ipsum aperiam quibusdam dolores eum cupiditate fugiat possimus architecto distinctio amet molestias error, voluptas corporis ea eaque laboriosam magni? Perferendis ea et dignissimos. At.</li>
            <li>sex</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
