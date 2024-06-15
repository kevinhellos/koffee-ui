const About = () => {

  enum Role {
    creator = "Creator",
    maintainer=  "Maintainer",
  }

  const contributors = [
    {
      photoUrl: "https://avatars.githubusercontent.com/u/126497052",
      username: "kevinhellos",
      role: Role.creator
    }
  ]


  return (
    <>
      <div className="workarea">
        <h1 style={{ fontWeight: 500 }} className="text-center">About</h1>
        <p className="hero-sub-text text-center">
            Koffee UI is built with the goal of providing a simple and customizable
            component library. <br />
            It's designed to be easy to use, quick to setup, flexible, and scalable.
        </p>
      </div>
      
      <h2 style={{ fontWeight: 500, marginTop: 35 }} className="text-center">
        Contributor & Maintainer
      </h2>
      <div className="hero-sub-text text-center">

        {contributors.map((person, index) => (
          <div className="popper" key={index}>
            <img 
              src={person.photoUrl}
              width={55}
              className="rounded-max shadow"
              alt={person.username}
            />
            <div className="popper-content" style={{textAlign:"left"}}>
              {person.role == "Creator" &&
                <div className="chip chip-black chip-sm" style={{marginBottom:"5px"}}>
                  Creator
                </div>
              }
              {person.role == "Maintainer" &&
                <div className="chip chip-default chip-sm" style={{marginBottom:"5px"}}>
                  Maintainer
                </div>
              }
              <a className="hover-link text-black" href={`https://github.com/${person.username}`} target="_blank">
                @{person.username}
              </a>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default About;
