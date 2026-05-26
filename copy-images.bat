@echo off
echo Copying bronze images to public folder...
if not exist "public" mkdir "public"
copy "%USERPROFILE%\.gemini\antigravity\brain\96274b53-423f-46b4-ace8-496574c63558\bronze_hero_1779777472166.png" "public\bronze-hero.png"
copy "%USERPROFILE%\.gemini\antigravity\brain\96274b53-423f-46b4-ace8-496574c63558\bronze_product_1_1779777486240.png" "public\bronze-lota.png"
copy "%USERPROFILE%\.gemini\antigravity\brain\96274b53-423f-46b4-ace8-496574c63558\bronze_product_2_1779777500713.png" "public\bronze-kadai.png"
copy "%USERPROFILE%\.gemini\antigravity\brain\96274b53-423f-46b4-ace8-496574c63558\tableware_no_food_1779781728113.png" "public\collection-tableware.png"
copy "%USERPROFILE%\.gemini\antigravity\brain\96274b53-423f-46b4-ace8-496574c63558\collection_pooja_1779780644352.png" "public\collection-pooja.png"
copy "%USERPROFILE%\.gemini\antigravity\brain\96274b53-423f-46b4-ace8-496574c63558\gift_animation_bg_1779789845380.png" "public\gift-bg.png"
echo Done! Images copied to public folder.
pause
