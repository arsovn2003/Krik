export interface HomepageProps {
    body: {
        banner_content: {
        title: string;
        subtitle: string;
        text: string;
    },
    float_container: {
        img: string;
        heading: string;
        subtitle: string;
        text: string;
    },
    services_block: {
        img: string;
        arrow_img: string;
        heading: string;
        subtitle1: string;
        service1: string;
        subtitle2: string;
        service2: string;
        subtitle3: string;
        service3: string;
    },
    partners_block: {
        heading: string;
        partner1: string;
        partner2: string;
        partner3: string;
        partner4: string;
    },
    tutorial_block: {
        video: string;
        headline: string;
        text: string;
    },
    news_block: {
        heading: string;
    }
   }
}

export interface AboutusProps {
    body: {
        about_content: {
        img: string;
        heading1: string;
        heading2: string;
        subheading1: string;
        subheading2: string;
        subheading3: string;
        subheading4: string;
        subheading5: string;
        subheading6: string;
        content1: string;
        content2: string;
        content3: string;
        content4: string;
        content5: string;
        question: string;
    }
    }
}

export interface OurTeamProps {
    body: {
        heading1: string;
        heading2: string;
        }
}

export interface DonationProps {
    body: {
        first_section: {
        heading: string;
    },
    second_section: {
        text1: string;
        text2: string;
    }
   }
}

export interface VolunteersProps {
    map: any;
    slug: string;
    body: {
        first_section: {
        heading: string;
    },
   }
}

export interface VolunteersItem {
    body: {
        id: string;
    img: string;
    firstName: string;
    middleName: string;
    lastName: string;
    years: string;
    country: string;
   }
}

export interface VolunteersProjects {
    body: {
        id: string;
    img: string;
    type: string;
    date: string;
    description: string;
    status: string;
   }
}

export interface ServicesProps {
    map: any;
    slug: string;
    body: {
        component1: {
        heading: string;
        content: string;
    },
    component2: {
        heading: string;
        content: string;
    },
    component3: {
        heading: string;
        content: string;
    }
   }
}

export interface ServicesGalleryProps {
    body: {
        heading: string;
    imgOne: string;
    imgTwo: string;
    imgThree: string;
    imgFour: string;
    imgFive: string;
  }
}

export interface DocumentsProps {
    body: {
        first_section: {
        year: string;
    },
    second_section: {
        year: string;
    },
    third_section: {
        year: string;
    }
    }
}

export interface ApplicationFormProps {
    body: {
        heading: string;
    }
}

export interface NewsletterProps {
    id: any;
    body: {
    content: string,
    image1: string,
    image2: string,
    image3: string
   }
}

export interface ProjectsProps {
    id: any;
    body: {
        heading1: string;
    heading2: string;
    heading3: string;
    img1: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    }
}

// export interface NewsletterProps {
//     date1: string;
//     date2: string;
//     date3: string;
//     content: string,
//     image1: string,
//     image2: string,
//     image3: string
// }


