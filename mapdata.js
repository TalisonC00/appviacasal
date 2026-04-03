var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    BRAC: {
      name: "Acre",
      description: "AC"
    },
    BRAL: {
      name: "Alagoas",
      description: "AL"
    },
    BRAM: {
      name: "Amazonas",
      description: "AM"
    },
    BRAP: {
      name: "Amapá",
      description: "AP"
    },
    BRBA: {
      name: "Bahia",
      description: "BA"
    },
    BRCE: {
      name: "Ceará",
      description: "CE"
    },
    BRDF: {
      name: "Distrito Federal",
      description: "DF"
    },
    BRES: {
      name: "Espírito Santo",
      description: "ES"
    },
    BRGO: {
      name: "Goiás",
      description: "GO"
    },
    BRMA: {
      name: "Maranhão",
      description: "MA"
    },
    BRMG: {
      name: "Minas Gerais",
      description: "MG"
    },
    BRMS: {
      name: "Mato Grosso do Sul",
      description: "MS"
    },
    BRMT: {
      name: "Mato Grosso",
      description: "MT"
    },
    BRPA: {
      name: "Pará",
      description: "PA"
    },
    BRPB: {
      name: "Paraíba",
      description: "PB"
    },
    BRPE: {
      name: "Pernambuco",
      description: "PE"
    },
    BRPI: {
      name: "Piauí",
      description: "PI"
    },
    BRPR: {
      name: "Paraná",
      description: "PR"
    },
    BRRJ: {
      name: "Rio de Janeiro",
      description: "RJ"
    },
    BRRN: {
      name: "Rio Grande do Norte",
      description: "RN"
    },
    BRRO: {
      name: "Rondônia",
      description: "RO"
    },
    BRRR: {
      name: "Roraima",
      description: "RR"
    },
    BRRS: {
      name: "Rio Grande do Sul",
      description: "RS"
    },
    BRSC: {
      name: "Santa Catarina",
      description: "SC"
    },
    BRSE: {
      name: "Sergipe",
      description: "SE"
    },
    BRSP: {
      name: "São Paulo",
      description: "SP"
    },
    BRTO: {
      name: "Tocantins",
      description: "TO"
    }
  },
  locations: {
    "0": {
      name: "Brasília",
      lat: "-15.783333",
      lng: "-47.916667"
    }
  },
  labels: {
    BRAC: {
      name: "Acre",
      parent_id: "BRAC",
      parent_type: "AC"
    },
    BRAL: {
      name: "Alagoas",
      parent_id: "BRAL",
      parent_type: "AL"
    },
    BRAM: {
      name: "Amazonas",
      parent_id: "BRAM",
      parent_type: "AM"
    },
    BRAP: {
      name: "Amapá",
      parent_id: "BRAP",
      parent_type: "AP"
    },
    BRBA: {
      name: "Bahia",
      parent_id: "BRBA",
      parent_type: "BA"
    },
    BRCE: {
      name: "Ceará",
      parent_id: "BRCE",
      parent_type: "CE"
    },
    BRDF: {
      name: "Distrito Federal",
      parent_id: "BRDF",
      parent_type: "DF"
    },
    BRES: {
      name: "Espírito Santo",
      parent_id: "BRES",
      parent_type: "ES"
    },
    BRGO: {
      name: "Goiás",
      parent_id: "BRGO",
      parent_type: "GO"
    },
    BRMA: {
      name: "Maranhão",
      parent_id: "BRMA",
      parent_type: "MA"
    },
    BRMG: {
      name: "Minas Gerais",
      parent_id: "BRMG",
      parent_type: "MG"
    },
    BRMS: {
      name: "Mato Grosso do Sul",
      parent_id: "BRMS",
      parent_type: "MS"
    },
    BRMT: {
      name: "Mato Grosso",
      parent_id: "BRMT",
      parent_type: "MT"
    },
    BRPA: {
      name: "Pará",
      parent_id: "BRPA",
      parent_type: "PA"
    },
    BRPB: {
      name: "Paraíba",
      parent_id: "BRPB",
      parent_type: "PB"
    },
    BRPE: {
      name: "Pernambuco",
      parent_id: "BRPE",
      parent_type: "PE"
    },
    BRPI: {
      name: "Piauí",
      parent_id: "BRPI",
      parent_type: "PI"
    },
    BRPR: {
      name: "Paraná",
      parent_id: "BRPR",
      parent_type: "PR"
    },
    BRRJ: {
      name: "Rio de Janeiro",
      parent_id: "BRRJ",
      parent_type: "RJ"
    },
    BRRN: {
      name: "Rio Grande do Norte",
      parent_id: "BRRN",
      parent_type: "RN"
    },
    BRRO: {
      name: "Rondônia",
      parent_id: "BRRO",
      parent_type: "RO"
    },
    BRRR: {
      name: "Roraima",
      parent_id: "BRRR",
      parent_type: "RR"
    },
    BRRS: {
      name: "Rio Grande do Sul",
      parent_id: "BRRS",
      parent_type: "RS"
    },
    BRSC: {
      name: "Santa Catarina",
      parent_id: "BRSC",
      parent_type: "SC"
    },
    BRSE: {
      name: "Sergipe",
      parent_id: "BRSE",
      parent_type: "SE"
    },
    BRSP: {
      name: "São Paulo",
      parent_id: "BRSP",
      parent_type: "SP"
    },
    BRTO: {
      name: "Tocantins",
      parent_id: "BRTO",
      parent_type: "TO"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};