/**
 * Created by marcoslopez7 on 17/06/16.
 */
(function () {
    var app = angular.module('starter.Factory', []);

    app.factory('Factory', function ($sce) {

        return {
            data: function () {
                return [
                    {
                        img: "sanidad-906px.jpg",
                        name: "Sanidad en la Familia",
                        speakers: ["Dra. Tere Alducin", "Maries Alducin"],
                        place: "Auditorio VNPEM Toluca",
                        location: "Vía Toluca-Tenango 01 sur Interior 8, col. La Michoacana, Metepec," +
                        " Edo. de Méx. C.P. 52166",
                        date: "17 de Junio, 7:00 p.m." +
                        "18 de Junio, 10:00 a.m. a 2:00 p.m." +
                        "y de 4:00 p.m. a 6:00 p.m. ",
                        url: "sanidad.html"
                    },
                    {
                        img: "grandeza-1645px.jpg",
                        name: "La grandeza del Dios de la Biblia",
                        speakers: ["Dr. Armando Alducin"],
                        place: "WTC Mexiquense",
                        location: "Circuito Circunvalación Oriente 10, Fracc. Ciudad Satélite," +
                        " Naucalpan de Juárez, Estado de México C.P. 53100",
                        date: "25 de Junio, 9:00 a.m."
                    },
                    {
                        img: "oaxaca_1280px.jpg",
                        name: "Seminario de Profecias Bíblicas",
                        speakers: ["Dr. Armando Alducin"],
                        place: "Auditorio del CAP",
                        location: "Carretera internacional Oaxaca, El Tule, Km 6.5, San Francisco Tula," +
                        " Sta Lucia del Camino, C.P. 71242",
                        date: ""
                    },
                    {
                        img: "clama_906px.jpg",
                        name: "CLAMA 2016",
                        speakers: ["Martín Maldonado", "Jessie y Abigail Bermúdez",
                            "Uri Immervoll", "Jair Tendrid (Invitado especial)"],
                        place: "Auditorio VNPEM Tlalnepantla",
                        location: "Boulevard Cumbres de Acultzingo 35, Los Pirules, Tlalnepantla, México, C.P. 54040",
                        date: "15 de Julio, 6:00 p.m. a 9:00 p.m." +
                        "16 de Julio, 9:00 a.m. a 9:00 p.m."
                    },
                    {
                        img: "clama_906px.jpg",
                        name: "CLAMA 2016",
                        speakers: ["Martín Maldonado", "Jessie y Abigail Bermúdez",
                            "Uri Immervoll", "Jair Tendrid (Invitado especial)"],
                        place: "Auditorio VNPEM Tlalnepantla",
                        location: "Boulevard Cumbres de Acultzingo 35, Los Pirules, Tlalnepantla, México, C.P. 54040",
                        date: "15 de Julio, 6:00 p.m. a 9:00 p.m." +
                        "16 de Julio, 9:00 a.m. a 9:00 p.m."
                    },
                    {
                        img: "clama_906px.jpg",
                        name: "CLAMA 2016",
                        speakers: ["Martín Maldonado", "Jessie y Abigail Bermúdez",
                            "Uri Immervoll", "Jair Tendrid (Invitado especial)"],
                        place: "Auditorio VNPEM Tlalnepantla",
                        location: "Boulevard Cumbres de Acultzingo 35, Los Pirules, Tlalnepantla, México, C.P. 54040",
                        date: "15 de Julio, 6:00 p.m. a 9:00 p.m." +
                        "16 de Julio, 9:00 a.m. a 9:00 p.m."
                    },
                    {
                        img: "clama_906px.jpg",
                        name: "CLAMA 2016",
                        speakers: ["Martín Maldonado", "Jessie y Abigail Bermúdez",
                            "Uri Immervoll", "Jair Tendrid (Invitado especial)"],
                        place: "Auditorio VNPEM Tlalnepantla",
                        location: "Boulevard Cumbres de Acultzingo 35, Los Pirules, Tlalnepantla, México, C.P. 54040",
                        date: "15 de Julio, 6:00 p.m. a 9:00 p.m." +
                        "16 de Julio, 9:00 a.m. a 9:00 p.m."
                    }
                ];
            }
        }

    });

}());