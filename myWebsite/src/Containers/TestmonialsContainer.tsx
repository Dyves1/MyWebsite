import '../Styles/testmonials.scss'
import { prof1, prof3, prof4 } from '../assets/IMAGES';

function TestmonialsContainer() {
    return (
        <div>
            <h1 className="text-center my-10 text-white">Testmonials</h1>
            <div className="container flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="main relative cursor-pointer">
                            <div className="service p-6 rounded-lg shadow" style={{ background: '#243b55', color: 'white' }}>
                                <div className="service-logo">
                                    <img src={prof4} alt="" className="object-cover object-center w-full h-full rounded-full" />
                                </div>
                                <h4 className="h-35 mx-auto relative" style={{ width: '80%', fontWeight:'bolder' }}>
                                    Naveed Anjum

                                </h4>
                                <p className="mt-10">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus sit laboriosam magni repudiandae quisquam exercitationem officia non? A delectus hic sint eveniet recusandae iste repellat magnam. Id, nam enim!
                                </p>
                            </div>
                            <div className="shadow1 h-200 w-80 absolute rounded-lg bottom-0 left-10 z-0 transition duration-700 transform hover:-translate-y-25"></div>
                            <div className="shadow2 h-200 w-64 absolute rounded-lg bottom-0 left-18 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="main relative cursor-pointer">
                            <div className="service p-6 rounded-lg shadow" style={{ background: '#243b55', color: 'white' }}>
                                <div className="service-logo">
                                    <img src={prof1} alt="" className="object-cover object-center w-full h-full rounded-full" />
                                </div>
                                <h4 className="h-35 mx-auto relative" style={{ width: '80%', fontWeight:'bolder' }}>
                                    Naveed Anjum
                                    {/* <span className="absolute right-0 top-0 w-40 h-30 bg-gradient-to-r from-white to-purple-700 z-0"></span>
                                    <span className="absolute left-0 bottom-0 w-40 h-30 bg-gradient-to-l from-white to-purple-700 z-0"></span> */}
                                </h4>
                                <p className="mt-10">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus sit laboriosam magni repudiandae quisquam exercitationem officia non? A delectus hic sint eveniet recusandae iste repellat magnam. Id, nam enim!
                                </p>
                            </div>
                            <div className="shadow1 h-200 w-80 absolute rounded-lg bottom-0 left-10 z-0 transition duration-700 transform hover:-translate-y-25"></div>
                            <div className="shadow2 h-200 w-64 absolute rounded-lg bottom-0 left-18 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="main relative cursor-pointer">
                            <div className="service p-6 rounded-lg shadow" style={{ background: '#243b55', color: 'white' }}>
                                <div className="service-logo">
                                    <img src={prof3} alt="" className="object-cover object-center w-full h-full rounded-full" />
                                </div>
                                <h4 className="h-35 mx-auto relative" style={{ width: '80%', fontWeight:'bolder' }}>
                                    Naveed Anjum
                                    {/* <span className="absolute right-0 top-0 w-40 h-30 bg-gradient-to-r from-white to-purple-700 z-0"></span>
                                    <span className="absolute left-0 bottom-0 w-40 h-30 bg-gradient-to-l from-white to-purple-700 z-0"></span> */}
                                </h4>
                                <p className="mt-10">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus sit laboriosam magni repudiandae quisquam exercitationem officia non? A delectus hic sint eveniet recusandae iste repellat magnam. Id, nam enim!
                                </p>
                            </div>
                            <div className="shadow1 h-200 w-80 absolute rounded-lg bottom-0 left-10 z-0 transition duration-700 transform hover:-translate-y-25"></div>
                            <div className="shadow2 h-200 w-64 absolute rounded-lg bottom-0 left-18 z-0"></div>
                        </div>
                    </div>
                    
                {/* </div> */}
            </div>
        </div>
    );
}

export default TestmonialsContainer;
