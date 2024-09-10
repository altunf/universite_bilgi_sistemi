"use client";
import ProfileCard from "./profile-card";

const ProfileDetail = ({ academic }) => (
  <section>
    <div className="grid grid-cols-1 gap-6 mt-6">
      <section>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <ProfileCard
            title="Projeler"
            content={[
              `Uluslararası - ${academic?.projects?.international} proje`,
              `TÜBİTAK - ${academic?.projects?.tubitak} proje`,
              `BAP - ${academic?.projects?.bap} proje`,
              `Diğer - ${academic?.projects?.other} proje`,
            ]}
          />
          <ProfileCard
            title="Yetiştirilen Öğrenci Sayısı"
            content={[
              `Yüksek Lisans (YÖKSİS) - ${academic?.graduateStudentCount?.yoksisYl}`,
              `Yüksek Lisans (TEZYÖK) - ${academic?.graduateStudentCount?.tezyokYl}`,
              `Doktora (YÖKSİS) - ${academic?.graduateStudentCount?.yoksisDr}`,
              `Doktora (TEZYÖK) - ${academic?.graduateStudentCount?.tezyokDr}`,
            ]}
          />
        </div>
        <div className="grid grid-cols-4 gap-6 mt-6">
          <ProfileCard
            title="Düzeltilmiş Makale Sayısı"
            content={academic?.adjustedArticleCount}
          />
          <ProfileCard
            title="Düzeltilmiş H-Index"
            content={academic?.adjustedHIndex}
          />
          <ProfileCard title="Anahtar Kavramlar" content={academic?.keyWords} />
          <ProfileCard
            title="Tıpta Uzmanlık Alanı"
            content={academic?.medicalSpeciality}
          />
        </div>
      </section>
    </div>
  </section>
);

export default ProfileDetail;
