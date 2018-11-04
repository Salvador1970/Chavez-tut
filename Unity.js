function displayInfo() {
        var country = [];
        var currency = [];
        var capital = [];
        var language = [];
        var minister = [];
        
        
        country[0] = "Angola";
        currency[0] = "Kwanza";
        capital[0] = "Luanda";
        language[0] = "portugese";
        minister[0] = "João Manuel Gonçalves Lourenço";
        
         country[1] = "Australia";
        currency[1] = "dollar";
        capital[1] = "Canberra";
        language[1] = "English";
        minister[1] = "Tony Abbott";
        
         country[2] = "Andorra";
        currency[2] = "Euro";
        capital[2] = "Andorra la Vella";
        language[2] = "Catalan";
        minister[2] = "Antoni Martí";
        
         country[3] = "Bahrain";
        currency[3] = "dinar";
        capital[3] = "Manama";
        language[3] = "Arabic";
        minister[3] = "Khalifa bin Salman Al Khalifa";
        
         country[4] = "Belize";
        currency[4] = "dollar";
        capital[4] = "Belmopan";
        language[4] = "English Belizean Creole, Garifuna, Mayan languages, Spanish";
        minister[4] = "Dean Barrow";
        
         country[5] = "Chile";
        currency[5] = "Peso";
        capital[5] = "Santiago de Chile";
        language[5] = "Espanol";
        minister[5] = "Sebastián Piñera";
        
         country[6] = "Cape Verde";
        currency[6] = "escudo";
        capital[6] = "Pria";
        language[6] = "portugese";
        minister[6] = "Jorge Carlos Fonseca";
        
         country[7] = "Denmark";
        currency[7] = "Euro";
        capital[7] = "Copenhagen";
        language[7] = "Danish and German";
        minister[7] = "Lars Løkke Rasmussen";
        
         country[8] = "Estonia";
        currency[8] = "Euro";
        capital[8] = "Tallinn";
        language[8] = "Estonian";
        minister[8] = "Kersti Kaljulaid";
        
         country[9] = "France";
        currency[9] = "Euro";
        capital[9] = "Paris";
        language[9] = "French";
        minister[9] = "Emmanuel Macron";
        
         country[10] = "Gambia";
        currency[10] = "Dalasi";
        capital[10] = "Banjul";
        language[10] = "English";
        minister[10] = "Adama Barrow";
        
         country[11] = "Hungria";
        currency[11] = "Forint";
        capital[11] = "Budapest";
        language[11] = "Hungarian";
        minister[11] = "Viktor Orbán";
        
         country[12] = "Iceland";
        currency[12] = "Krona";
        capital[12] = "Reykjavík";
        language[12] = "Icelandic";
        minister[12] = "Katrín Jakobsdóttir";
        
         country[13] = "Jordan";
        currency[13] = "dinar";
        capital[13] = "Amman";
        language[13] = "Arabic";
        minister[13] = "Omar Razzaz";
        
         country[14] = "Kenya";
        currency[14] = "Shilling";
        capital[14] = "Nairobi";
        language[14] = "English Swahili";
        minister[14] = "Uhuru Muigai Kenyatta";
        
         country[15] = "Lithuania";
        currency[15] = "Euro";
        capital[15] = "Vilnius";
        language[15] = "Lithuanian";
        minister[15] = "Saulius Skvernelis";
        
         country[16] = "Morroco";
        currency[16] = "dirham";
        capital[16] = "Rabat";
        language[16] = "Arabic Berber";
        minister[16] = "Saadeddine Othmani";
        
         country[17] = "Nigeria";
        currency[17] = "Niara";
        capital[17] = "Lagos";
        language[17] = "English";
        minister[17] = "Muhammadu Buhari";
        
        country[18] = "Oman";
        currency[18] = "Rial ";
        capital[18] = "Muscat";
        language[18] = "Arabic";
        minister[18] = "Qaboos bin Said al Said";
        
         country[19] = "Pakistan";
        currency[19] = "Rupee";
        capital[19] = "Islamabad";
        language[19] = "English-Urdu";
        minister[19] = "Nasirul Mulk";
        
         country[20] = "Qatar";
        currency[20] = "Riyal";
        capital[20] = "Doha";
        language[20] = "English";
        minister[20] = "Abdullah bin Nasser bin Khalifa Al Thani";
        
         country[21] = "Russia";
        currency[21] = "Ruble";
        capital[21] = "Moscow";
        language[21] = "Russian";
        minister[21] = "Vlademir Putin";
        
        var choice = document.getElementById("countries").value;
        
        for(var i =0;i<country.length;i++) {
          if(country[i] == choice) {
            document.getElementById("current").value = capital[i];
            document.getElementById("money").value = currency[i];
            document.getElementById("lengua").value = language[i];
            document.getElementById("lider").value = minister[i];
            break;
          }
          else 
          {
            document.getElementById("current").value ="";
            document.getElementById("money").value ="";
            document.getElementById("lengua").value ="";
            document.getElementById("lider").value ="";
          }
        }
        
        
        
  }