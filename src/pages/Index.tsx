
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const ContractAdvantages = [
  {
    icon: "Banknote",
    title: "Высокое денежное довольствие",
    description: "От 204 000 рублей в месяц + премии за выполнение задач"
  },
  {
    icon: "Shield",
    title: "Полное обеспечение",
    description: "Современное вооружение и экипировка, полное обеспечение"
  },
  {
    icon: "Home",
    title: "Статус участника СВО",
    description: "Льготы участникам СВО, жилищное обеспечение, компенсации"
  },
  {
    icon: "Trophy",
    title: "Участие в СВО",
    description: "Возможность внести вклад в защиту национальных интересов России"
  },
  {
    icon: "Heart",
    title: "Страхование жизни",
    description: "Страховка и компенсации в случае ранения, полное медобслуживание"
  },
  {
    icon: "FileText",
    title: "Оформление за 3 дня",
    description: "Быстрое оформление документов и отправка в учебный центр"
  }
];

const Index = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Наши специалисты свяжутся с вами в ближайшее время",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Триколор в верхней части страницы */}
      <div className="w-full flex flex-col sm:flex-row">
        <div className="h-4 sm:h-8 w-full sm:w-1/3 bg-white"></div>
        <div className="h-4 sm:h-8 w-full sm:w-1/3 bg-blue-600"></div>
        <div className="h-4 sm:h-8 w-full sm:w-1/3 bg-red-600"></div>
      </div>

      {/* Хедер */}
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl sm:text-2xl">КОНТРАКТ НА СВО</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#advantages" className="hover:text-blue-300 transition">Преимущества</a>
              <a href="#requirements" className="hover:text-blue-300 transition">Требования</a>
              <a href="#enlist" className="hover:text-blue-300 transition">Оставить заявку</a>
            </div>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              8-800-100-77-07
            </Button>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative bg-slate-800 py-16 sm:py-24">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1565612711844-8d486c52ec71?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Служба по контракту в зоне СВО</h1>
            <p className="text-xl mb-8">Стань частью единой команды, защищающей национальные интересы России. Высокое денежное довольствие, социальные гарантии, статус ветерана боевых действий.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8">
                <Icon name="Phone" className="mr-2" /> Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8">
                <Icon name="FileText" className="mr-2" /> Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Преимущества службы по контракту</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ContractAdvantages.map((advantage, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon} className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Информация о контракте */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-center mb-8">Условия контракта</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
                  <Icon name="Award" className="mr-2" /> Денежное довольствие
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>От 204 000 рублей в месяц</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Премия за выполнение боевых задач</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Единовременная выплата 195 000 руб. при заключении контракта</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Дополнительные выплаты за успешное выполнение задач</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
                  <Icon name="ShieldCheck" className="mr-2" /> Социальные гарантии
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Статус ветерана боевых действий</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Страхование жизни и здоровья</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Полное медицинское обеспечение</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Льготы по ипотеке, образованию и пенсии</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Требования */}
      <section id="requirements" className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Требования к кандидатам</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="CheckCircle" className="text-green-500 mr-2" /> Подходите если вы:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="ChevronRight" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Гражданин РФ в возрасте от 18 до 60 лет</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ChevronRight" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Годны по состоянию здоровья к военной службе</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ChevronRight" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Образование не ниже основного общего (9 классов)</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ChevronRight" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Отсутствие судимости</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="FileText" className="text-blue-500 mr-2" /> Необходимые документы:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="FileCheck" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Паспорт гражданина РФ</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="FileCheck" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Военный билет</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="FileCheck" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>СНИЛС и ИНН</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="FileCheck" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Реквизиты банковской карты МИР</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="enlist" className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Оставить заявку</h2>
            <p className="text-center mb-8">Заполните форму, и наши специалисты свяжутся с вами для консультации</p>
            <Card className="bg-white text-slate-900">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="block text-sm font-medium">ФИО</label>
                      <Input id="full-name" placeholder="Иванов Иван Иванович" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium">Телефон</label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="age" className="block text-sm font-medium">Возраст</label>
                      <Input id="age" type="number" min="18" max="60" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="region" className="block text-sm font-medium">Регион проживания</label>
                      <Input id="region" placeholder="Москва" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-medium">Военный опыт</label>
                    <Input id="experience" placeholder="Напишите вашу военную специальность (если есть)" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">Дополнительная информация</label>
                    <Textarea id="message" placeholder="Опыт службы, имеющиеся навыки, вопросы" rows={3} />
                  </div>
                  <div className="text-sm text-slate-500">
                    Нажимая кнопку "Отправить", вы даете согласие на обработку персональных данных
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Информация о пунктах отбора */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Пункты отбора на военную службу по контракту</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="flex justify-center mb-4">
                  <Icon name="MapPin" className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Москва и область</h3>
                <p className="text-slate-500">г. Москва, ул. Угрешская, дом 8</p>
                <p className="font-medium mt-2">8 (495) 123-45-67</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="flex justify-center mb-4">
                  <Icon name="MapPin" className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Санкт-Петербург</h3>
                <p className="text-slate-500">г. Санкт-Петербург, наб. реки Фонтанки, 90</p>
                <p className="font-medium mt-2">8 (812) 123-45-67</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <div className="flex justify-center mb-4">
                  <Icon name="PhoneCall" className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Единая горячая линия</h3>
                <p className="text-slate-500">Круглосуточно, без выходных</p>
                <p className="font-medium mt-2">8-800-100-77-07</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="mb-4">Пункты отбора на военную службу по контракту работают во всех субъектах РФ</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Search" className="mr-2" /> Найти ближайший пункт отбора
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-xl">СЛУЖБА ПО КОНТРАКТУ В СВО</p>
              <p className="text-sm text-slate-400 mt-1">© {new Date().getFullYear()} Министерство обороны Российской Федерации</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Icon name="Phone" className="mr-2" /> 8-800-100-77-07
              </Button>
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="text-white" />
                <span>contract@mil.ru</span>
              </div>
            </div>
          </div>
          {/* Триколор в нижней части страницы */}
          <div className="w-full flex mt-6">
            <div className="h-2 w-1/3 bg-white"></div>
            <div className="h-2 w-1/3 bg-blue-600"></div>
            <div className="h-2 w-1/3 bg-red-600"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
