
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const ContractAdvantages = [
  {
    icon: "Banknote",
    title: "Стабильное денежное довольствие",
    description: "От 204 000 рублей в месяц плюс дополнительные выплаты и премии"
  },
  {
    icon: "Shield",
    title: "Социальные гарантии",
    description: "Полный социальный пакет, медицинское обслуживание и страхование"
  },
  {
    icon: "Home",
    title: "Жилищное обеспечение",
    description: "Возможность получения жилья или компенсация за наем жилого помещения"
  },
  {
    icon: "GraduationCap",
    title: "Образование и карьера",
    description: "Бесплатное обучение и повышение квалификации, карьерный рост"
  },
  {
    icon: "Heart",
    title: "Забота о семье",
    description: "Помощь семьям военнослужащих, льготы на образование для детей"
  },
  {
    icon: "Trophy",
    title: "Участие в защите Родины",
    description: "Возможность внести свой вклад в обеспечение безопасности страны"
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
              <span className="font-bold text-xl sm:text-2xl">КОНТРАКТНАЯ СЛУЖБА</span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#advantages" className="hover:text-blue-300 transition">Преимущества</a>
              <a href="#requirements" className="hover:text-blue-300 transition">Требования</a>
              <a href="#enlist" className="hover:text-blue-300 transition">Оставить заявку</a>
            </div>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
              Горячая линия
            </Button>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative bg-slate-800 py-16 sm:py-24">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Служба по контракту</h1>
            <p className="text-xl mb-8">Стань частью профессиональной команды, защищающей интересы нашей Родины. Достойное вознаграждение, социальные гарантии и уверенность в завтрашнем дне.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8">
                <Icon name="Phone" className="mr-2" /> Позвонить нам
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8">
                <Icon name="FileText" className="mr-2" /> Узнать подробнее
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
                    <span>Гражданин Российской Федерации</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ChevronRight" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Возраст от 18 до 60 лет</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ChevronRight" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Образование не ниже основного общего (9 классов)</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ChevronRight" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Годны по состоянию здоровья к военной службе</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="ChevronRight" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Физически подготовлены</span>
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
                    <span>Военный билет или приписное свидетельство</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="FileCheck" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Документы об образовании</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="FileCheck" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Медицинское заключение (при наличии)</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="FileCheck" className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Фотографии 3x4 (4 шт.)</span>
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
                    <label htmlFor="message" className="block text-sm font-medium">Дополнительная информация</label>
                    <Textarea id="message" placeholder="Опыт службы, имеющиеся навыки, вопросы" rows={4} />
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

      {/* Дополнительная информация */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Дополнительная информация</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <Icon name="MapPin" className="h-10 w-10 mx-auto mb-4 text-red-600" />
                <h3 className="text-lg font-semibold mb-2">Пункты отбора</h3>
                <p>Пункты отбора на военную службу по контракту работают во всех субъектах РФ</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Icon name="Clock" className="h-10 w-10 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">Сроки рассмотрения</h3>
                <p>Заявки рассматриваются в кратчайшие сроки, процесс оформления занимает минимум времени</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <Icon name="HelpCircle" className="h-10 w-10 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg font-semibold mb-2">Консультации</h3>
                <p>Опытные специалисты ответят на все ваши вопросы о прохождении службы по контракту</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-xl">КОНТРАКТНАЯ СЛУЖБА</p>
              <p className="text-sm text-slate-400 mt-1">© {new Date().getFullYear()} Все права защищены</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="text-white" />
                <span>8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="text-white" />
                <span>info@contract-service.ru</span>
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
