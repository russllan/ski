import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const shopsData = [
  {
    title: "Outdoor Getaways",
    image:
      "https://media.istockphoto.com/id/1369519317/photo/owner-of-ski-retail-shop.jpg?s=612x612&w=0&k=20&c=ptsedxX9yFsnvfVBobouQuhHB6fbI0F5HsRWC_QaxvU=",
    stays: 'Ахунбаева 170',
  },
  {
    title: "Ski House",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gNnv1LVb1LuwQLw6pbkLZDX-cxTiy2vEdQ&s",
    stays: '162 ул. Шабдан баатыра',
  },
  {
    title: "Ski Park",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: '89 Мадиева',
  },
  {
    title: "Pets Allowed",
    image:
      "https://media.istockphoto.com/id/872621650/photo/female-sales-assistant-tuning-up-skis-for-customer.jpg?s=612x612&w=0&k=20&c=3M9DFRNVtqf2X-d6TP_3638254J7yaAmetr1vhhlSB8=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
  {
    title: "Luxury Stays",
    image:
      "https://media.istockphoto.com/id/1155264154/photo/variety-of-alpine-skis-for-sale-in-modern-sports-equipment-store.jpg?s=612x612&w=0&k=20&c=4ludJ_wkhtzKUuyzvJnAvv6JjZoYnUxj8OUE2GnhPC0=",
    stays: "89 Мадиева",
  },
];

const ShopPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={3} // Показать 1 слайд по умолчанию
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3, // Показать 1 слайд на больших экранах, можно увеличить
          },
        }}
        className="flex"
      >
        {shopsData.map((shop, index) => (
          <SwiperSlide key={index}>
            {index % 3 === 0 || index % 3 === 2 ? (
              // Большая карточка
              <div className="relative overflow-hidden rounded-lg h-[500px]">
                <img
                  src={shop.image}
                  alt={shop.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                  <div>
                    <h3 className="text-white text-lg font-semibold">
                      {shop.title}
                    </h3>
                    <p className="text-white text-sm"><span>Адрес: </span>{shop.stays}</p>
                  </div>
                </div>
              </div>
            ) : (
              // Две маленькие карточки
              <div className="flex flex-col space-y-4">
                <div className="relative overflow-hidden rounded-lg h-60">
                  <img
                    src={shopsData[index].image}
                    alt={shopsData[index].title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                    <div>
                      <h3 className="text-white text-lg font-semibold">
                        {shopsData[index].title}
                      </h3>
                      <p className="text-white text-sm">
                        <span>Адрес: </span> {shopsData[index].stays}
                      </p>
                    </div>
                  </div>
                </div>
                {index + 1 < shopsData.length && (
                  <div className="relative overflow-hidden rounded-lg h-60">
                    <img
                      src={shopsData[index + 1].image}
                      alt={shopsData[index + 1].title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                      <div>
                        <h3 className="text-white text-lg font-semibold">
                          <span>Адрес: </span>{shopsData[index + 1].title}
                        </h3>
                        <p className="text-white text-sm">
                        <span>Адрес: </span>{shopsData[index + 1].stays} stays
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopPage;
