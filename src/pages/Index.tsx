import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState('');

  const portfolioItems = [
    {
      id: 1,
      title: "Креативный Портфолио",
      description: "Полное портфолио с проектами, навыками и достижениями",
      category: "Основное",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      color: "from-[#FF6B6B] to-[#4ECDC4]"
    },
    {
      id: 3,
      title: "Технические Проекты",
      description: "Разработка и реализация сложных технических решений",
      category: "Разработка",
      pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      color: "from-[#4ECDC4] to-[#DDA0DD]"
    }
  ];

  const openPdf = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
    setIsPdfOpen(true);
  };

  const closePdf = () => {
    setIsPdfOpen(false);
    setSelectedPdf('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#DDA0DD] to-[#FF6B6B] rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#4ECDC4] to-[#DDA0DD] rounded-full opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
              Creative Portfolio
            </div>
            <div className="flex gap-6">
              <Button variant="ghost" className="text-white hover:text-[#4ECDC4] transition-colors">
                Home
              </Button>
              <Button variant="ghost" className="text-white hover:text-[#FF6B6B] transition-colors">
                Portfolio
              </Button>
              <Button variant="ghost" className="text-white hover:text-[#DDA0DD] transition-colors">
                Contact
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-['Montserrat']">
              <span className="text-gradient animate-gradient-shift">
                Творческое
              </span>
              <br />
              <span className="text-white">Портфолио</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-['Open_Sans']">
              Исследуйте мою коллекцию креативных проектов, дизайн-решений и технических разработок. 
              Каждый PDF документ содержит детальную информацию о проектах.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="creative-gradient hover:opacity-90 text-white border-none px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать CV
              </Button>
              <Button variant="outline" className="glass-effect text-white border-white/30 hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4ECDC4] to-[#DDA0DD] bg-clip-text text-transparent">
              Портфолио Документы
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className={`w-full h-32 rounded-lg bg-gradient-to-r ${item.color} mb-4 flex items-center justify-center`}>
                      <Icon name="FileText" size={40} className="text-white" />
                    </div>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                      <Badge variant="secondary" className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white border-none">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{item.description}</p>
                    <Button 
                      onClick={() => openPdf(item.pdfUrl)}
                      className={`w-full bg-gradient-to-r ${item.color} hover:opacity-90 text-white border-none transition-all duration-300 hover:scale-105`}
                    >
                      <Icon name="Eye" size={16} className="mr-2" />
                      Открыть PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


      </div>

      {/* PDF Viewer Modal */}
      {isPdfOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl max-h-[90vh] w-full h-full flex flex-col animate-scale-in">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Просмотр PDF</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={closePdf}
                className="text-gray-500 hover:text-gray-700"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src={selectedPdf}
                className="w-full h-full rounded border"
                title="PDF Viewer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;